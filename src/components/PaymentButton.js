import React, { useState } from "react"
import { PaystackButton } from "react-paystack"

// const config = {
//  reference: (new Date()).getTime(),
//  email: "marycharisbenevolent@gmail.com",
//  amount: 200000,
//  publicKey: 'pk_live_654e8679915699ce6fdfe6cc46a999b1a1e42961',
// };

function PaymentButton() {

 const publicKey = "pk_live_654e8679915699ce6fdfe6cc46a999b1a1e42961"
 const [amount, setAmount] = useState(300000)
 const [email, setEmail] = useState("")
 const [name, setName] = useState("")

 const componentProps = {
  email,
  amount,
  metadata: {
    name
  },
  publicKey,
  text: "Donate",
  onSuccess: () =>
    alert("Thanks for your Donation"),
  onClose: () => alert("Wait! Don't leave :("),
}
  return (
    <div>
     <form>
            <label>Amount (Last 2 zeros are for kobo)</label>
            <input
              type="number"
              id="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <label>Name</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
            <label>Email</label>
            <input
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </form>
          <PaystackButton className="btn waves-effect waves-light" {...componentProps} />
    </div>
  )
}

export default PaymentButton