import { TextField } from "@mui/material"

const styles = { width: "464px" };

interface Props {
    label: string;
    placeholder: string;
    value: any;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

function Input({ label, placeholder, value, onChange }: Props) {
    return (
        <TextField
            sx={styles}
            label={placeholder}
            variant="outlined"
            value={value}
            onChange={onChange}
            type={label}
        />
    );
}

export default Input;