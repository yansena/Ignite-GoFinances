import { renderHook, act } from '@testing-library/react-hooks';
import { useAuth, AuthProvider } from './auth';

jest.mock('expo-auth-session', () => {
  return {
    startAsync: () => {
      return {
        type: 'success',
        params: {
          access_token: 'google-token'
        }
      }
    }
  }
});

describe('Auth Hook', () => {
  it('should to be able to sign Google account', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () =>
        Promise.resolve({
          id: `userInfo.id`,
          email: `userInfo.email`,
          name: `userInfo.given_name`,
          photo: `userInfo.picture`,
          locale: `userInfo.locale`,
          verified_email: `userInfo.verified_email`,
        }),
    })) as jest.Mock

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider
    });

    await act(() => result.current.signInWithGoogle());

    expect(result.current.user).toBeTruthy();
  });

  // it('user should not conect if cancel auth w/ google', async () => {

  //   const { result } = renderHook(() => useAuth(), {
  //     wrapper: AuthProvider
  //   });

  //   await act(() => result.current.signInWithGoogle());

  //   expect(result.current.user).not.toHaveProperty();
  // });


})