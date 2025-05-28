// @/utils/AuthContext.js
import { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

   // 수정: 응답 인터셉터에 재시도 로직 추가
   useEffect(() => {
    // 응답 인터셉터 설정
    const responseInterceptor = axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        // 401 Unauthorized 에러인 경우
        if (error.response && error.response.status === 401) {
            logout();
        }
        return Promise.reject(error);
      }
    );

    
    // 컴포넌트 언마운트 시 인터셉터 제거
    return () => {
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  useEffect(() => {
    // 클라이언트 사이드에서만 실행
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem('token');
      const storedUser = localStorage.getItem('user');
      
      if (storedToken && storedUser) {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
      }
      
      setLoading(false);
    }
  }, []);

  // 로그인 함수
  const login = (userData, accessToken) => {

    console.log(userData);
    console.log(accessToken);

    setUser(userData);
    setToken(accessToken);
    
    // 로컬 스토리지에 저장
    localStorage.setItem('token', accessToken);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // 로그아웃 함수
  const logout = useCallback(() => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    router.push('/');
  },[router]);

  // 인증 상태 확인
  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

// 커스텀 훅
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth는 AuthProvider 내부에서만 사용할 수 있습니다');
  }
  return context;
}