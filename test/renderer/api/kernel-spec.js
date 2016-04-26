import { expect } from 'chai';

import {
  launchKernel,
  shutdownKernel,
} from '../../../src/notebook/api/kernel';

describe('the circle of life', () => {
  it('is available for creating and destroying kernels', () => {
    const kernelPromise = launchKernel('python2');

    return kernelPromise.then(kernel => {
      expect(kernel.spawn).to.not.be.undefined;
      shutdownKernel(kernel);
      expect(kernel.spawn).to.be.undefined;
    })
  });
});
