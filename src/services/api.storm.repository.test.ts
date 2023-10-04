import { ApiStormsRepository } from './api.storm.repository';

describe('Given ApiStormsRepository class ', () => {
  describe('When we instantiate it', () => {
    const repoStorm = new ApiStormsRepository('');
    test(' getAll', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue('Test'),
      });
      repoStorm.getAll();
      expect(global.fetch).toHaveBeenCalled();
    });
    test(' getAll with an error', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue('Test'),
      });
      expect(repoStorm.getAll()).rejects.toThrow();
    });
    test(' getById', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue('Test'),
      });
      repoStorm.getById('');
      expect(global.fetch).toHaveBeenCalled();
    });
    test(' getById with an error', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue('Test'),
      });
      expect(repoStorm.getById('')).rejects.toThrow();
    });
    test(' create', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue('Test'),
      });
      repoStorm.create({} as FormData);
      expect(global.fetch).toHaveBeenCalled();
    });
    test(' create with an error', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue('Test'),
      });
      expect(repoStorm.create({} as FormData)).rejects.toThrow();
    });

    test('The method updateProfile should be used', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue('Test'),
      });
      repoStorm.update({}, '');
      expect(global.fetch).toHaveBeenCalled();
    });
    test('The method updateProfile should be used with an error', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue('Test'),
      });
      expect(repoStorm.update({}, '')).rejects.toThrow();
    });
    test('The method delete should be used', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue('Test'),
      });
      repoStorm.delete('');
      expect(global.fetch).toHaveBeenCalled();
    });
    test('The method delete should be used with an error', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue('Test'),
      });
      expect(repoStorm.delete('')).rejects.toThrow();
    });
  });
});
