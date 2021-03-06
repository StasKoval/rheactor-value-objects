'use strict'

const _map = require('lodash/map')
const SlugValue = require('../slug')
const ValidationFailedError = require('../errors/validation-failed')

/* global describe, it */

const expect = require('chai').expect

describe('SlugValue()', function () {
  it('should parse a slug', (done) => {
    _map([
      'some-slug',
      'short'
    ], (slug) => {
      let d = new SlugValue(slug)
      expect(d.toString()).to.equal(slug)
    })
    done()
  })

  it('should not parse invalid slugs', (done) => {
    _map([
      'not a slug',
      'a-',         //  trailing dash
      'a--',        //  trailing dash
      '-a',         //  leading dash
      '--a'         //  leading dash
    ], (slug) => {
      expect(() => {
        SlugValue(slug)
      }).to.throw(ValidationFailedError)
    })
    done()
  })
})

describe('SlugValue.Type', () => {
  it('should detect invalid types', (done) => {
    _map([
      {foo: 'bar'},
      null,
      undefined
    ], (v) => {
      expect(() => {
        SlugValue.Type(v)
      }).to.throw(TypeError)
    })
    done()
  })
  it('should accept valid types', (done) => {
    SlugValue.Type(new SlugValue('slug'))
    done()
  })
})
