import React from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';

const stock = () => {
    return (
        <>
            <Head>
                <title>Landing Page - Estoque</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar />
        </>
    );
};

export default stock;