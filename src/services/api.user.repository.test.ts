import { User } from '../model/user.model';
import { ApiUsersRepository } from './api.user.repository';

describe('Given ApiUsersRepository class ', () => {
  describe('When we instantiate it', () => {
    const repo = new ApiUsersRepository('');
    test('The method getAll should be used', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue('Test'),
      });
      repo.getAll('');
      expect(global.fetch).toHaveBeenCalled();
    });
    test('The method getAll should be used with an error', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue('Test'),
      });
      expect(repo.getAll('')).rejects.toThrow();
    });
    test('The method getById should be used', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue('Test'),
      });
      repo.getById('', '');
      expect(global.fetch).toHaveBeenCalled();
    });
    test('The method getById should be used with an error', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue('Test'),
      });
      expect(repo.getById('', '')).rejects.toThrow();
    });
    test('The method create should be used', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue('Test'),
      });
      repo.register({} as User);
      expect(global.fetch).toHaveBeenCalled();
    });
    test('The method create should be used with an error', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue('Test'),
      });
      expect(repo.register({} as User)).rejects.toThrow();
    });
    test('The method login should be used', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue('Test'),
      });
      repo.login({} as User);
      expect(global.fetch).toHaveBeenCalled();
    });
    test('The method login should be used with an error', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue('Test'),
      });
      expect(repo.login({} as User)).rejects.toThrow();
    });
    test('The method updateProfile should be used', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue('Test'),
      });
      repo.update({}, '');
      expect(global.fetch).toHaveBeenCalled();
    });
    test('The method updateProfile should be used with an error', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue('Test'),
      });
      expect(repo.update({}, '')).rejects.toThrow();
    });
    test('The method delete should be used', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue('Test'),
      });
      repo.delete('');
      expect(global.fetch).toHaveBeenCalled();
    });
    test('The method delete should be used with an error', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue('Test'),
      });
      expect(repo.delete('')).rejects.toThrow();
    });
  });
});
