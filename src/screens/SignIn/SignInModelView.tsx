import { UserContext } from "@contexts/userContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { signIn } from "@services/auth/auth";
import { UserLogin } from "@services/types";
import { useMutation } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { Alert } from "react-native";

const SignInModelView = () => {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { setUser } = useContext(UserContext);

  const { mutate: MutateSignIn, isLoading } = useMutation({
    mutationFn: (formData: UserLogin) => signIn(formData),
    onSuccess: async (data) => {
      if (data.success) {
        await AsyncStorage.setItem("@user", JSON.stringify(data.user));
        setUser({ user: data.user, auth: true });
      } else {
        setError(true);
      }
    },
    onError: () => {
      Alert.alert(
        "Copiloto",
        "Desculpe, estamos com problemas. Tente novamente mais tarde."
      );
    },
  });

  const handleSignIn = () => {
    const userData: UserLogin = {
      email: email,
      senha: password,
    };

    MutateSignIn(userData);
  };
  return {
    isLoading,
    navigation,
    handleSignIn,
    error,
    email,
    setEmail,
    password,
    setPassword,
  };
};

export default SignInModelView;
