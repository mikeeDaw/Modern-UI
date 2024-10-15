const ClipPath = () => {
  return (
    // This is a clip path definition. To mask the content of other elements according to the
    // shape defined in the <path> inside the <clipPath>.
    //
    // Breakdown:
    //  • width={0} height={0} - creates an invisible SVG element.  used only to define the clip
    //                           path, and does not render anything by itself.
    //  • id=benefits - The unique identifier of this clip path. Any element that needs to use this
    //                  clip path will reference this ID via `clip-path="url(#benefits)"`.
    //
    //  • clipPathUnits="objectBoundingBox"
    //     - The units of the coordinates inside the path are relative to the bounding box of the
    //       ELEMENT BEING CLIPPED. (in this case, the <img> is the reference width and height. NOT
    //       its parent div)
    //     - The coordinates range between 0 and 1, and they scale with the size of the
    //       clipped element.
    //     - The element that has the `clip-path: url(#myClipPath)` style will be the reference.
    //
    <svg className="block" width={0} height={0}>
      <clipPath id="benefits" clipPathUnits="objectBoundingBox">
        <path d="M0.079,0 h0.756 a0.079,0.083,0,0,1,0.058,0.026 l0.086,0.096 A0.079,0.083,0,0,1,1,0.179 V0.917 c0,0.046,-0.035,0.083,-0.079,0.083 H0.079 c-0.044,0,-0.079,-0.037,-0.079,-0.083 V0.083 C0,0.037,0.035,0,0.079,0" />
      </clipPath>
    </svg>
  );
};

export default ClipPath;
