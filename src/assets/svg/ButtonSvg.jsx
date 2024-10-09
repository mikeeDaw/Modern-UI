// Takes an argument and returns an <svg> element.

// if white == 'white', the whole element becomes color white.

/* 
Some Notes:
   • viewbox - viewBox="min-x min-y width height" 
        • min-x - X coordinate of top-left corner of viewbox (horizontal) 
        • min-y - Y coordinate of top-left corner of viewbox (vertical)
        • width - width of viewbox (also the max x-coordinate) 
        • height - height of viewbox (also the max y-coordinate)
        NOTE: These are UNITLESS (no px, em, etc.) 
    ex: viewBox='0 0 10 10'
      - '0 0' means coordinate system starts at (0,0)
      - '10 10' means the scale or ratio to fit the area it is assigned to. 
*/

const ButtonSvg = (white) => (
  <>
    {
      // This is the left edge. kinda like a curved '['.
      // Its NOT only on left side, a little on top and bottom side.
      //
      // If "white", the whole svg becomes white including the stroke.
    }
    <svg
      className="absolute top-0 left-0"
      width="21"
      height="44"
      viewBox="0 0 21 44"
    >
      <path
        fill={white ? "white" : "none"}
        stroke={white ? "white" : "url(#btn-left)"} // mentioned in ButtonGradient.jsx
        strokeWidth="2"
        d="M21,43.00005 L8.11111,43.00005 C4.18375,43.00005 1,39.58105 1,35.36365 L1,8.63637 C1,4.41892 4.18375,1 8.11111,1 L21,1"
      />
    </svg>
    {
      // This is the top and bottom edge. horizontal parallel lines.
      //
      // If "white", the whole part of this svg becomes white including the stroke.
      //   and only paints one rectangle
      //
      // The '1.3125rem' positioning is bc the `width` of the left part svg is '21' (can be px
      //   because unitless) and 1.3125rem == 21px. (assuming the root font size is 16px)
      //
      // The 2.625rem == 42px. so the width is 100% of the parent element minus the 2 svgs
      // on the left and right side.
      //
      // NOTE: the 'width' value in the 'viewBox' which is 100, is cancelled out bc of the
      //        'w-[calc(100%-2.625rem)]'. (unless you change it to 0)
    }
    <svg
      className="absolute top-0 left-[1.3125rem] w-[calc(100%-2.625rem)]"
      height="44"
      viewBox="0 0 100 44"
      preserveAspectRatio="none"
      fill={white ? "white" : "none"}
    >
      {white ? (
        <polygon
          fill="white"
          fillRule="nonzero"
          points="100 0 100 44 0 44 0 0"
        />
      ) : (
        <>
          {
            // Top line
            //
            // Notice in 'viewBox' the min x&y are "0 0". So Coords (100, 0) is at the
            //   right-most on x and top-most on y. (Max values are defined on the
            //   parent viewBox. In this case , its "100 44". )
          }
          <polygon
            fill="url(#btn-bottom)" // mentioned in ButtonGradient.jsx
            fillRule="nonzero"
            points="100 0 100 2 0 2 0 0"
          />
          {
            // Bottom Line
          }
          <polygon
            fill="url(#btn-top)" // mentioned in ButtonGradient.jsx
            fillRule="nonzero"
            points="100 42 100 44 0 44 0 42"
          />
        </>
      )}
    </svg>
    {
      // This is the right edge. kinda like a curved ']' with a slice on top-right.
      // Its NOT only on right side, a little on top and bottom side.
      //
      // If "white", the whole svg becomes white including the stroke.
    }
    <svg
      className="absolute top-0 right-0"
      width="21"
      height="44"
      viewBox="0 0 21 44"
    >
      <path
        fill={white ? "white" : "none"}
        stroke={white ? "white" : "url(#btn-right)"} // mentioned in ButtonGradient.jsx
        strokeWidth="2"
        d="M0,43.00005 L5.028,43.00005 L12.24,43.00005 C16.526,43.00005 20,39.58105 20,35.36365 L20,16.85855 C20,14.59295 18.978,12.44425 17.209,10.99335 L7.187,2.77111 C5.792,1.62675 4.034,1 2.217,1 L0,1"
      />
    </svg>
  </>
);

export default ButtonSvg;
