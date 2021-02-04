import Centered from '../layouts/centered'
import {withRedux} from '../lib/redux'
import Form from '../components/subscribe-1'

const Subscribe = () => {
  return (
    <Centered>
      <p className="text-secondary mb-4">
        Please signup then scan the QR Code then try to login.
      </p>
      <Form />
    </Centered>
  )
}

export default withRedux(Subscribe)
