// All Items in this directory is an svg component to be used on the UI.
//
// This is an svg with 4 different linear gradients that are not visible on their own
//   (bc width & height is 0) until it is consumed by another UI component.
//

/* 
Some Notes:
    • <linearGradient /> - apply linear gradients to OTHER svg elements. by their id
                         - applied as fill or background color to be consumed by components.
    • x1, x2, y1, y2 - controls the point of the gradient vector used to map gradient stop values.
                     - supports ONLY 2 coordinates. x1, x2 & y1, y2
        • x1 & y1 - defines STARTING point of the gradient along their axis where they are drawn.
        • x2 & y2 - defines ENDING point of the gradient along their axis where they are drawn.
      
      Ex: 1. x1="50%" x2="50%" y1="0%" y2="100%"  >> gradient from bottom to top.
          2. x1="0%" x2="100%" y1='50%' y2="100%" >> like above but tilts clockwise imperfect
                                                  top-left to bottom-right
          3. x1="0%" x2="100%" y1='0%' y2="100%" >> diagonal direction. top-left to bottom-right.
*/

const ButtonGradient = () => {
  return (
    <svg className="block" width={0} height={0}>
      <defs>
        {
          // Linear Gradient Declaration
          // NOTE: coord props (like `x1`) is START and `offset` is END so put values accordingly.
        }
        <linearGradient id="btn-left" x1="50%" x2="50%" y1="0%" y2="100%">
          {
            // Can declare more than 2 colors...
            //
            // First Color. offset is where it ENDS from the bounding of x1,x2,...
          }
          <stop offset="0%" stopColor="#89F9E8" />
          {
            // Second Color. offset is where it ENDS from the bounding of x1,x2,...
          }
          <stop offset="100%" stopColor="#FACB7B" />
        </linearGradient>
        <linearGradient id="btn-top" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#D87CEE" />
          <stop offset="100%" stopColor="#FACB7B" />
        </linearGradient>
        <linearGradient id="btn-bottom" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#9099FC" />
          <stop offset="100%" stopColor="#89F9E8" />
        </linearGradient>
        <linearGradient
          id="btn-right"
          x1="14.635%"
          x2="14.635%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#9099FC" />
          <stop offset="100%" stopColor="#D87CEE" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ButtonGradient;
