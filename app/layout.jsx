import '@styles/globals.css';
import { Children } from 'react';

export const metadata = {
    title: "ai_prompt",
    description: 'Discover And Share AI Prompt'
} 

const Root = () => {
    return (
        <html lang='en'>
            <body>
                <div className='main'>
                    <div className='gradient'/>
                </div>
                <main className='app'>
                    {Children}
                </main>
            </body>
        </html>
    )
}

export default Root