import React from 'react'
import Head from 'next/head';

interface Props {
    title: string,
    keywords: string,
    description: string
}

const Meta = ({ title, keywords, description }: Props) => {
    return (
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            <link rel='icon' href='/favicon.ico' />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap" rel="stylesheet" />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Eventful',
    keywords: 'events, meetup, online events',
    description: 'Gain knowledge. Build connection'
}

export default Meta;
