import { useEffect, useState } from 'react';

type Props = {
  /** Widget unique identifier */
  id: string;
  /** Widget's position identifier inside the grid.
   * This value is used to disable the `opacity` of the
   * widget when it's position changes inside the grid.
   */
  positionInGrid: number;
  /** Callback to handle a widget's `dragstart` event */
  onDragStart: (key: string) => void;
  /** Callback to handle a widget's `dragover` event */
  onDragOver: (key: string) => void;
  /** Callback to handle a widget's `dragend` event */
  onDragEnd: () => void;

  /** Element to be rendered inside the widget */
  children: React.ReactElement;
};

const Widget: React.FC<Props> = ({
  children,
  id,
  positionInGrid,
  onDragStart,
  onDragOver,
  onDragEnd,
}) => {
  const [isEntered, setIsEntered] = useState(false);

  useEffect(() => setIsEntered(false), [positionInGrid]);

  return (
    <div
      data-id={id}
      id={id}
      style={{
        backgroundColor: 'transparent',
        width: '100%',
        height: '100%',
        opacity: isEntered ? 0.5 : 1,
      }}
      draggable
      onDragEnter={() => setIsEntered(true)}
      onDragOver={event => {
        event.preventDefault();
        const overredWidgetId = event.currentTarget.dataset.id;
        if (overredWidgetId) onDragOver(id);
      }}
      onDragLeave={() => setIsEntered(false)}
      onDragExit={event => console.log(event)}
      onDragStart={() => {
        onDragStart(id);
      }}
      onDragEnd={() => {
        onDragEnd();
      }}
    >
      {children}
    </div>
  );
};

export default Widget;
