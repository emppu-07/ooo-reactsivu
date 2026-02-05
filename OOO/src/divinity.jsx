function Divinity() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/death' element={<Death />} />
            </Routes>
            <div className="min-h-screen flex flex-col">
                <div className="flex-grow">
                    <br />
                    <a href="https://www.imood.com/users/emppu"><img src="https://moods.imood.com/display/uname-emppu/fg-FFFFFF/bg-330066/imood.gif" alt="The current mood of emppu at www.imood.com" border="0" /></a>
                    <h1 className="text-pink-400"><a href="#">ÅÅÅ <p className='text-sm'>three shall last.</p></a></h1>
                    <br />
                    <div><p className="text-pink-300">What is <a href='#'>it</a>? <hr /></p>
                        <ul className="list-disc"> <br />
                            <li>
                                It is a top-down shooter video game where you play as this little square inside the void. Your goal is to abolish the other squares with whatever you have left (be it a rifle, shotgun or sniper. whichever you chose at the beginning.)
                            </li>
                            <br />
                            <li>
                                Other squares chase you. If they manage to get close to you. It's game over.
                            </li>
                            <br />
                            <li>
                                There was supposed to be worm-type of enemies but they haven't been implemented yet.
                                <span className="inline-flex items-center gap-1">
                                    <img src={voidfiend} alt="voidfiend" className="h-8 w-16 voidfiend" />
                                    &lt;- here it is... aint it cute?
                                </span>
                            </li>
                            <br />
                            <li>This was a school project. Heavily experimental. Made with Unity Engine 2022.something. I think if I'm bored enough I could try to continue this project. Probably in a different engine though. I don't really like Unity!</li>
                        </ul>
                    </div>
                </div>

                <footer className="mt-8 p-4 w-full md:flex md:items-center md:justify-between md:p-6">
                    <span className="text-sm sm:text-center">
                        © 2026 <a href="#" className="hover:underline">Emppu</a>.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0 gap-4">
                        <li>
                            <a href="https://emqqu.github.io/portfolio/" className="hover:underline">Portfolio</a>
                        </li>
                        <li>
                            <a href="https://emqqu.itch.io/" className="hover:underline">Itch</a>
                        </li>
                    </ul>
                </footer>
            </div>
        </BrowserRouter>
    )
}

export default Divinity