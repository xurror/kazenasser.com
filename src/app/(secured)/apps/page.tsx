import { getSession } from '@auth0/nextjs-auth0';
import Image from 'next/image';

export default async function Page() {
  const { user, idToken } = await getSession() || {};

	if (user) {
		console.log(user);
		fetch('http://127.0.0.1:8000/api/private', {
			headers: {
				'Authorization': `Bearer ${idToken}`,
			},
		}).then((res) => res.json()).then((data) => console.log(data));
	}

  return (
		<div>
			{user && (
				<div>
					<picture>
						<img src={user.picture} alt={user.name} />
					</picture>
					<h2>{user.name}</h2>
					<p>{user.email}</p>
				</div>
			)}
			{!user && (
				<div>
					<h1>Not logged in</h1>
					<a href="/api/auth/login">Log in</a>
				</div>
			)}
		</div>
  );
}