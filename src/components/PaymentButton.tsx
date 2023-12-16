import React, { useState } from 'react';
import { usePaystackPayment, PaystackButton } from 'react-paystack';

const PaymentButton: React.FC = () => {
    const [name, setName] = useState('Anonymous');
    const [email, setEmail] = useState('anonymous@gmail.com');
    const [amount, setAmount] = useState(300000);
    const publicKey = 'pk_live_654e8679915699ce6fdfe6cc46a999b1a1e42961';
    const reference = String((new Date()).getTime())

    const config = {
        name,
        email,
        amount,
        reference,
        publicKey,
        text: 'Donate',
        onSuccess: () => alert('Thanks for your Donation'),
        onClose: () => alert("Wait! Don't leave :(")
    };

    const PayButton = () => {
        const initializePayment = usePaystackPayment(config);
        return (
            <div>
                <button className="btn waves-effect waves-light" onClick={() => {
                    initializePayment()
                }}>Pay</button>
            </div>
        );
    };
    return (
        <div>
            <form>
                <label>Amount (Last 2 zeros are for kobo 3000.00)</label>
                <input
                    type="number"
                    id="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                />
                <label>Name (Edit to put your name)</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Email (Edit to put your email)</label>
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </form>
            <PayButton />
        </div>
    );
};

export default PaymentButton;