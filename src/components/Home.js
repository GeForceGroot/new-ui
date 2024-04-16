import React from 'react'
import Carousel from './Carousel'
import Benifits from './Benifits'
import OurProcess from './OurProcess'
import GlobalUniversity from './GlobalUniversity'
import ShortContact from './ShortContact'
import AssignmnetProvide from './AssignmnetProvide'
import ServiceHome from './ServiceHome'
import WorkSpeaks from './WorkSpeaks'
import Dream from './Dream'
import Acadmicimpact from './Acadmicimpact'
import Faq from './Faq'
import { Helmet } from 'react-helmet'
import Testimonials from './Testimonials'

const Home = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name='description' content='Unlock academic success with Smart Study Assist, your trusted online destination for expert academic writing services. Get top-notch assistance today!'/>
                <title>Smart Study Assist: Expert Academic Writing Services for Success</title>
            </Helmet>
            <Carousel />
            <Benifits />
            <OurProcess />
            <GlobalUniversity />
            <ShortContact />
            <AssignmnetProvide />
            <ServiceHome />
            <WorkSpeaks />
            <Dream />
            <Acadmicimpact />
            <Faq />
            <Testimonials/>
        </>
    )
}

export default Home
