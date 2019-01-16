import * as React from 'react'
import { RootState } from '../store'
import { connect } from 'react-redux'
import { login } from '../store/session/actions'
import { AccessToken } from '../store/session/reducers'
import { ThunkDispatch } from 'redux-thunk'

interface State {
}

interface OwnProps {
}

interface DispatchProps {
  login: (username: string, password: string) => void
}

interface StateProps {
  accessToken: AccessToken
}

type Props = StateProps & OwnProps & DispatchProps

class Login extends React.Component<Props, State> {

  constructor(prop:Props) {
    super(prop)
    this.state = {
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center mb-3">
          <div className="col-6">
          {
            this.props.accessToken.accessToken && 'You are logged In!'
            ||
            this.props.accessToken.isFetching && 'Faking Login in' 
            ||
            <button className="btn btn-primary" onClick={() => this.props.login('someusername', 'somepassword')}>
              Login
            </button>
          }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (states: RootState, ownProps: OwnProps): StateProps => {
  return {
    accessToken: states.session.accessToken
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>, ownProps: OwnProps): DispatchProps => {
  return {
    login: async (username, password) => {
      await dispatch(login(username, password))
      console.log('Login completed [UI]')
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)