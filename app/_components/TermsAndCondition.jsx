import Head from 'next/head'
import React from 'react'
import Header from './Header'
import Footer from './Footer'

const TermsAndCondition = () => {
  return (
    <>
     <Head>
        <title>Terms and Conditions | AI Course Generator</title>
        <meta name="description" content="Read the terms and conditions for using AI Course Generator services." />
        <meta name="keywords" content="terms and conditions, AI courses, legal" />
        <link rel="canonical" href="https://www.yourwebsite.com/terms-and-conditions" />
      </Head>
      <Header/>
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>
    <p className="mb-4">
      Welcome to AI Course Generator! By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
    </p>
    <h2 className="text-lg font-semibold mb-2">1. Acceptance of Terms</h2>
    <p className="mb-4">
      By using our website, you confirm that you accept these terms and conditions in full. If you do not agree with any part of these terms, you must not use our website.
    </p>
    <h2 className="text-lg font-semibold mb-2">2. Use of Our Services</h2>
    <p className="mb-4">
      You agree to use our services only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of our services.
    </p>
  
    <p className="mb-4">
      If you have any questions about these terms, please contact us at <strong>toriisahar@gmail.com</strong>.
    </p>
  </div>
  <Footer/>
    </>
  )
}

export default TermsAndCondition