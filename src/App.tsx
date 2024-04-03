import WidgetsGridContainer from './components/WidgetsGridContainer';

// Dummy widgets array
const widgets = [
  {
    id: '1',
    element: (
      <div
        style={{
          backgroundColor: 'greenyellow',
          width: '100%',
          height: '100%',
        }}
      >
        Widget 1
      </div>
    ),
  },
  {
    id: '2',
    element: (
      <div
        style={{
          backgroundColor: 'blueviolet',
          width: '100%',
          height: '100%',
        }}
      >
        Widget 2
      </div>
    ),
  },
  {
    id: '3',
    element: (
      <div
        style={{
          backgroundColor: 'red',
          width: '100%',
          height: '100%',
        }}
      >
        Widget 3
      </div>
    ),
  },
  {
    id: '4',
    element: (
      <div
        style={{
          backgroundColor: 'pink',
          width: '100%',
          height: '100%',
        }}
      >
        Widget 4
      </div>
    ),
  },
  {
    id: '5',
    element: (
      <div
        style={{
          backgroundColor: 'gold',
          width: '100%',
          height: '100%',
        }}
      >
        Widget 5
      </div>
    ),
  },
  {
    id: '6',
    element: (
      <div
        style={{
          backgroundColor: 'teal',
          width: '100%',
          height: '100%',
        }}
      >
        Widget 6
      </div>
    ),
  },
];

function App() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vw',
        backgroundColor: '#f5f6fa',
      }}
    >
      <WidgetsGridContainer
        widgets={widgets}
        minWidth="1000px"
        gridTemplateColumns="auto auto auto"
        gridAutoRows="300px"
      />
    </div>
  );
}

export default App;
