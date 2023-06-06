import React from 'react'
import MerchantHeader from './MerchantHeader'
import OrderSummary from './OrderSummary'
import PaymentSummary from './PaymentSummary'
import Announcement from './Announcement'

const MerchantHome = () => {
    return (
        <div className='max-w-screen-2xl mx-auto px-4'>
            <MerchantHeader />
            <Announcement />
            <OrderSummary />
            <PaymentSummary />
        </div>
    )
}

export default MerchantHome