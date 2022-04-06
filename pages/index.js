import Head from 'next/head'

export default function Home() {
    const submit = e => {
        e.preventDefault()
        window.location.href = 'https://api.whatsapp.com/send/?phone=' + e.target.number.value
    }
    return (
        <div>
            <Head>
                <title>Whatsapp Anyone</title>
                <meta name="description" content="Whatsapp Anyone" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className='flex justify-center'>
                <form className='container p-4' onSubmit={submit}>
                    <div className="mb-6 flex justify-center">
                        <h3 className='text-3xl'>Whatsapp Anyone</h3>
                    </div>
                    <div className="mb-6 flex justify-center">
                        <input 
                            name="number"
                            type="number" 
                            id="number" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full max-w-sm p-2.5 text-center" 
                            placeholder="Whatsapp Phone Number" 
                            required 
                        />
                    </div>
                    <div className="mb-6 text-center">
                        <input type='submit' className='focus:outline-none text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'/>
                    </div>
                </form>
            </main>


        </div>
    )
}
