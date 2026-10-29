//import ArrowRightAlt2Icon from 'gitlab:iconify-icons/react#dashicons/arrow-right-alt2';
// En lugar de "gitlab:iconify-icons/react#dashicons/arrow-right-alt2"
//import ArrowRightAlt2Icon from '~icons/dashicons/arrow-right-alt2'

import {CardList} from "../components/CardList.jsx"

export const Home = () => {
    return(
        <main className= " flex min-h-screen flex-col items-center justify-center p-4 bg-black">
        <div className="bg-amber-400 mx-auto w-full text-white">
        	<h1 class name="text-3xl font-bold text-center mb-8">React - 19 Teoria</h1>
            <CardList/>
        </div>
        </main>
    )
}