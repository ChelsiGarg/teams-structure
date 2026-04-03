// React libraries
import type { ReactElement, ReactNode } from "react";

// MUI libraries
import {
    AttachEmailOutlined,
    WorkHistoryOutlined,
    WorkspacePremiumOutlined,
} from "@mui/icons-material";
import { Avatar, Box, Card, CardContent, Stack, Typography } from "@mui/material";

type MemberCardProps = {
    id: string;
    name: string;
    role: string;
    experience: string;
    specialization: string;
    email: string;
}

type DetailRowProps = {
    icon: ReactElement;
    label: string;
    children: ReactNode;
}

function DetailRow({ icon, label, children }: DetailRowProps) {
  return (
    <Stack direction="row" spacing={1.25} alignItems="center" >
        <Box sx={{ color: "text.secondary", lineHeight: 0 }}>{icon}</Box>
        <Typography variant="body2" color="text.secondary">
            <Box component="span" sx={{ color: "text.primary", fontWeight: 700, mr: 0.5 }}>
                {label}:
            </Box>
            {children}
        </Typography>
    </Stack>
  )
}

function MemberCard({ id, name, role, experience, specialization, email }: MemberCardProps) {
  return (
    <Card
        elevation={0}
        sx={{
            width: "100%",
            height: "100%",
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 3,
            boxShadow: 2,
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: 4,
            },
        }}
    >
        <CardContent
            sx={{
                p: 2.5,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                "&:last-child": { pb: 2.5 },
            }}
        >
            <Stack direction="row" spacing={2} alignItems="center">
                <Avatar
                    sx={{
                        bgcolor: "primary.light",
                        color: "primary.contrastText",
                        width: 60,
                        height: 60,
                        fontWeight: 700,
                    }}
                >
                    {id?.slice(0,2)}
                </Avatar>
                <Stack spacing={0.25}>
                    <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {role}
                    </Typography>
                </Stack>
            </Stack>

            <Stack spacing={1.25} sx={{ mt: 2, flexGrow: 1, justifyContent: "center" }}>
                <DetailRow icon={<WorkHistoryOutlined fontSize="small" />} label="Experience">
                    {experience}
                </DetailRow>
                <DetailRow icon={<WorkspacePremiumOutlined fontSize="small" />} label="Specialization">
                    {specialization}
                </DetailRow>
                <DetailRow icon={<AttachEmailOutlined fontSize="small" />} label="Email">
                    {email}
                </DetailRow>
            </Stack>
        </CardContent>
    </Card>
  )
}

export default MemberCard
