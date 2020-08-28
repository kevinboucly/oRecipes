import { should } from 'chai';
import { getSlugByTitle } from 'src/selectors/recipes';
import { describe } from 'mocha';

should();
describe.only('Selectors Recipes', () => {
  describe('getSlugByTitle', () => {
    describe('structure', () => {
      it('should be a function', () => {
        getSlugByTitle.should.be.a('function');
      });
      it('should return a string', () => {
        getSlugByTitle('test').should.be.a('string');
      });
    });
    describe('execution', () => {
      it('should return a slugify title', () => {
        getSlugByTitle('\'&@éè 123').should.equal('ee-123');
        getSlugByTitle('Dessert au yaourt').should.equal('dessert-au-yaourt');
        getSlugByTitle('poulet_au_gingembre').should.equal('poulet-au-gingembre');
      });
    });
  });
});
