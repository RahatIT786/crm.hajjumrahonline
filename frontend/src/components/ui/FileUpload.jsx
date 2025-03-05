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
});

const FileUpload = ({
  onChange,
  label = "Upload files",
  accept = "",
  multiple = true,
  width = "auto",
  height = "40px",
  register,
  name,
}) => {
  const handleFileChange = (event) => {
    const file = event.target.files; // ✅ Ensure a single file is selected
    if (file) {
      onChange(file); // ✅ Pass file instead of file list
    } else {
      console.log("No file selected"); // Debugging message
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
      }}
    >
      {label}
      <VisuallyHiddenInput
        type="file"
        onChange={handleFileChange}
        name={name}
        accept={accept}
        multiple={multiple}
      />
    </Button>
  );
};

export default FileUpload;

