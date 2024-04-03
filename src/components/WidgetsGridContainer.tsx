import { useCallback, useState } from 'react';
import Widget from './Widget';

type Props = {
  /** Widgets array, each provided id must be unique */
  widgets: {
    id: string;
    element: React.ReactElement;
  }[];
  /** Minimum width of the container */
  minWidth: string;
  /** CSS `grid-template-columns` property for the grid */
  gridTemplateColumns: string;
  /** CSS `grid-auto-rows` property for the grid */
  gridAutoRows?: string;
};

const WidgetsGridContainer: React.FC<Props> = ({
  widgets,
  minWidth,
  gridTemplateColumns,
  gridAutoRows,
}) => {
  const [widgetsList, setWidgetsList] = useState(widgets);
  const [draggedWidgetId, setDraggedWidgetId] = useState<string>('');
  const [enteredWidgetId, setEnteredWidgetId] = useState<string>('');

  /** Handles the swapping of two widgets */
  const swapWidgets = useCallback(() => {
    if (enteredWidgetId === '' || draggedWidgetId === enteredWidgetId) return;

    const newWidgetsList = Array.from(widgetsList);

    // Retrieving the dragged widget's index.
    const draggedWidgetIndex = widgetsList.findIndex(
      element => element.id === draggedWidgetId
    );
    // Retrieving the entered widget's index (the widget to be swapped with).
    const enteredWidgetIndex = widgetsList.findIndex(
      element => element.id === enteredWidgetId
    );

    // Swap
    const draggedWidget = newWidgetsList[draggedWidgetIndex];
    newWidgetsList[draggedWidgetIndex] = newWidgetsList[enteredWidgetIndex];
    newWidgetsList[enteredWidgetIndex] = draggedWidget;
    setWidgetsList(newWidgetsList);

    setEnteredWidgetId('');
    setDraggedWidgetId('');
  }, [draggedWidgetId, enteredWidgetId, widgetsList]);

  return (
    <div
      style={{
        display: 'grid',
        width: '100%',
        minWidth,
        gridTemplateColumns,
        gridAutoRows,
      }}
    >
      {widgetsList.map((widget, index) => (
        <Widget
          key={widget.id}
          id={widget.id}
          positionInGrid={index}
          onDragOver={setEnteredWidgetId}
          onDragStart={setDraggedWidgetId}
          onDragEnd={swapWidgets}
        >
          {widget.element}
        </Widget>
      ))}
    </div>
  );
};

export default WidgetsGridContainer;
