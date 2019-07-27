/*!
 * Copyright (c) 2014-2018 Digital Bazaar, Inc. All rights reserved.
 */
/* eslint-disable indent */
'use strict';

module.exports = async function({
  assert, constants, jsigs, mock, Suite, should
}) {

// run tests
describe('EcdsaSecp256k1Signature2019', () => {
  it('constructor works', async () => {
    const s = new Suite();
    s.should.be.an('object');
    should.exist(s.type);
    s.type.should.equal('EcdsaSecp256k1Signature2019');
    should.exist(s.requiredKeyType);
    s.requiredKeyType.should.equal('EcdsaSecp256k1VerificationKey2019');
  });
});

};
