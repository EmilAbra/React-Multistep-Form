import { FormWrapper } from "./FormWrapper";

type AccountData = {
  email: string;
  password: string;
};

type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};

export function AccountForm({
  email,
  password,
  updateFields,
}: AccountFormProps) {
  return (
    <FormWrapper title="Account Creation">
      <label>Email</label>
      <input
        value={email}
        autoFocus
        required
        type="email"
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label>Password</label>
      <input
        value={password}
        required
        type="password"
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </FormWrapper>
  );
}
