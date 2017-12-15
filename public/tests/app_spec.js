describe('LearnJS', function() {
  it('can show a problem view', funciton() {
    learnjs.showView('#problem-1');
    expect($('.view-container .problem-view').lentgh).toEqual(1);
  });
});
