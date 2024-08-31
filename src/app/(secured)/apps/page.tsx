import { getSession } from '@auth0/nextjs-auth0';

export default async function Page() {
  const { user, idToken } = await getSession() || {};

	if (user) {
		console.log(user);
		fetch('http://localhost:3001/', {
			headers: {
				'Authorization': `Bearer ${idToken}`,
			},
		}).then((res) => res.json()).then((data) => console.log(data));
	}

  return (
		<div>
			{user && (
				<div>
					<img src={user.picture} alt={user.name} />
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