export const getUserQuery = `
  query GetUSer($email :String!) {
    user(by: {email: $email }) {
      id
      name
      email
      avatarUrl
      description
      githubUrl
      linkedinUrl
    }
  }
  `;

export const createUserMutation = `
  mutation CreateUser($input: userCreateInput!) {
    userCreate(input: $input) {
      name
      email
      avatarUrl
      description
      githubUrl
      linkedinUrl
      id
    } 
`;
