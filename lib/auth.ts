const TOKEN_KEY = 'auth_token';
const MEMBER_ID_KEY = 'member_id';

export const auth = {
    // 토큰 저장
    setToken(token: string) {
        localStorage.setItem(TOKEN_KEY, token);
    },

    // 토큰 가져오기
    async getToken(): Promise<string | null> {
        if (typeof window === 'undefined') return null;
        return localStorage.getItem(TOKEN_KEY);
    },

    // 토큰 삭제
    removeToken() {
        localStorage.removeItem(TOKEN_KEY);
    },

    // 토큰 존재 여부 확인
    async hasToken(): Promise<boolean> {
        const token = await this.getToken();
        return !!token;
    },
};
