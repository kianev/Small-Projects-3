import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;
  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should increment totalVotes on upVote()', () => {
    // Arrange

    // Act
    component.upVote();
    // Assert
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalVotes on downVote()', () => {
    // Arrange

    // Act
    component.downVote();
    // Assert
    expect(component.totalVotes).toBe(-1);
  });
});
