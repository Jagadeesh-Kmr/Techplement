import Header from '../Header'
import Footer from '../Footer'

import './index.css'

const Contact = () => {
  const renderPersonDetails = () => (
    <>
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="person-details-bg-div"
      >
        <input
          type="hidden"
          name="access_key"
          value="90f97961-dc3c-41ea-8613-6e37688cd4fc"
        />
        <div>
          <input
            type="text"
            className="p-d-input"
            placeholder="Name"
            name="name"
          />

          <input
            type="text"
            name="email"
            className="p-d-input"
            placeholder="E-Mail"
          />
        </div>

        <div className="msq-input-div">
          <textarea
            type="text"
            name="message"
            className="p-d-input msg"
            placeholder="Message...."
          />
        </div>
        <div className="contact-btn-div">
          <button type="submit" className="contact-btn">
            Submit
          </button>
        </div>
      </form>
    </>
  )

  return (
    <>
      <Header />
      <div className="contact-main-div">
        <h1 className="contact-h">
          Here to <span className="help-p"> help</span>
        </h1>
        <p className="contact-p">
          Any questions or remarks? Just write us a message!
        </p>
        {renderPersonDetails()}
      </div>
      <Footer />
    </>
  )
}

export default Contact
