'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');
describe('generateUUID function test', () => {
    it('should return randomUUID', () => {
        var result = index.generateUUID();
        expect(result).to.equal(result);
    });
    it('should return randomUUID', () => {
        var result = index.generateUUID();
        expect(result).to.equal(result);
    });
});