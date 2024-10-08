import ActiveLink from './ActiveLInk';

export default function NavBar() {
	return (
		<nav className='menu-container'>
			<ActiveLink href="/" text='Home' />
			<ActiveLink href="/about" text='About' />
			<ActiveLink href="/contact" text='Contact' />
		</nav>
	)
}
