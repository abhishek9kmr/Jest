import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native';
import { Text, View } from 'react-native';
import App from '../App';

//describe:
//describe is used to group together related test cases 
//within a test suite. It takes two arguments: a string 
//describing the group (often the name of the component or 
//function being tested) and a function containing the test cases.
//describe helps in organizing tests hierarchically, making it easier
// to understand the structure of your test suite.

describe('App', () => {

  //it (or test):
  //it (or test) is used to define individual test cases within a
  // describe block. They take a string describing the specific behavior
  // being tested and a function containing the test logic.
  //it and test are interchangeable; you can use either depending
  // on your preference.
  it('renders correctly', () => {
    renderer.create(<App />);
  });

  //test:
  //As mentioned above, test is essentially the same as it.
  // It's used to define individual test cases within a describe block.
  //Some developers prefer using test over it for readability or consistency.

  test('renders Text component with "App" text', () => {
    const { getByText } = render(<App />);
    const textComponent = getByText('App');
    expect(textComponent).toBeDefined();
  });

  test('renders Text component with "App" text', () => {
    const { getByText } = render(<App />);
    const textComponent = getByText('Child');
    expect(textComponent).toBeDefined();
  });
});
