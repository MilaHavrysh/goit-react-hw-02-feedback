import React, { Component } from 'react';
import './App.css';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = e => {
    this.setState(prevState => {
      if (e.target.textContent === 'Good') {
        return { good: prevState.good + 1 };
      } else if (e.target.textContent === 'Neutral') {
        return { neutral: prevState.neutral + 1 };
      } else if (e.target.textContent === 'Bad') {
        return { bad: prevState.bad + 1 };
      }
    });
  };
  countTotalFeedback = () => {
    this.total = Object.values(this.state).reduce(
      (acc, amount) => acc + amount,
    );
    return this.total;
  };
  countPositiveFeedbackPercentage = () => {
    this.positivePercentage = Math.round((this.state.good / this.total) * 100);
    return this.positivePercentage;
  };
  render() {
    return (
      <div className="App">
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.countFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={'No feedback given'} />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
