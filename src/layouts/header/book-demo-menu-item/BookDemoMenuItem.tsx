"use client";

import { Typography, MenuItem, Box } from "@mui/material";
import Button from "@mui/material/Button";
import Image from "next/image";
import LogoIcon from "@root/assets/layout/images/logo-icon.svg";

export const BookDemoMenuItem = ({
  itemOnClick,
  itemName,
  itemDescription,
  btnText,
  btnClick,
}: any) => {
  return (
    <MenuItem
      onClick={() => itemOnClick?.()}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      <Box display={"flex"} alignItems={"center"} flex={1} gap={1}>
        <Box
          width={"30px"}
          height={"30px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ backgroundColor: "#F0F0F2", borderRadius: "4px" }}
        >
          <Image src={LogoIcon} alt="brand-logo" width={20} height={20} />
        </Box>
        <Box>
          <Typography
            sx={{ color: "#6B6B80", fontsize: "16px", fontWeight: "600" }}
          >
            {itemName || "Book a Demo"}
          </Typography>
          <Typography
            sx={{ color: "#A6A6B3", fontsize: "16px", fontWeight: "500" }}
          >
            {itemDescription || "Discover AccountHelpSquad with our experts"}
          </Typography>
        </Box>
      </Box>
      <Box>
        <Button variant="contained" type="button" onClick={() => btnClick?.()}>
          {btnText || "Request a Demo"}
        </Button>
      </Box>
    </MenuItem>
  );
};
