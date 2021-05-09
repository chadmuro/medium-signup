import React, { useContext, useState, useEffect, createContext } from 'react';
import { supabase } from '../supabase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const session = supabase.auth.session();

		setUser(session?.user ?? null);
		setLoading(false);

		const { data: listener } = supabase.auth.onAuthStateChange(
			(event, session) => {
				setUser(session?.user ?? null);
				setLoading(false);
			}
		);

		return () => {
			listener?.unsubscribe();
		};
	}, []);

	const value = {
		signUp: data => supabase.auth.signUp(data),
		signIn: data => supabase.auth.signIn(data),
		signOut: () => supabase.auth.signOut(),
		user,
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContext);
};
