import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
  color:"white",
});

const FileUpload = React.forwardRef(
 ({
  onChange,
  label = "Upload files",
  accept = "",
  multiple = true,
  width = "auto",
  height = "40px",

  
},ref) => {
  const handleFileChange = (event) => {
    const files = event.target.files;
    if (onChange) {
      onChange(files); // Pass selected files to parent component
    } else {
      console.log(files); // Fallback if no onChange handler is passed
    }
  };

  return (
    <Button
      component="label"
      variant="contained"
      startIcon={<CloudUploadIcon />}
      sx={{
        textTransform: "none",
        width: width,
        height: height,
        color: "white !important", // Force white color
        backgroundColor: "#1976d2", // Ensure proper contrast
        "&:hover": {
          backgroundColor: "green", // Slightly darker on hover
          color: "white !important", // Ensure text stays white
        },
      }}
    >
      {label}
      <VisuallyHiddenInput
        type="file"
        onChange={handleFileChange}
        accept={accept}
        multiple={multiple}
        ref={ref}
      />
    </Button>
  );
}
);

export default FileUpload;

