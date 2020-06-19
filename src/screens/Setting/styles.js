import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background: #1e222b;
    flex: 1;
`;

export const BoxProfile = styled.View`
    flex-direction: column;
    padding: 20px 0;
    /* justify-content: space-between; */
`;
export const ButtonHelp = styled.TouchableOpacity`
   align-items: flex-end;
   padding: 10px;
`;

export const ButtonHelpText = styled.Text`
    color: #00fc6c;
    font-size: 16px;
`;

export const Profile = styled.SafeAreaView`
    justify-content: center;
    align-items: center;
`;

export const Avatar = styled.Image`
    width: 120px;
    height: 120px;
    border-radius: 200px;
`;

export const ProfileUser = styled.Text`
    font-size: 22px;
    color: #fff;
`;

export const ProfileName = styled.Text`
    margin-top: 8px;
    font-size: 18px;
    color: rgba(255,255,255,0.6);
`;

export const ProfileInfo = styled.TouchableOpacity``;

export const ProfileInfoText = styled.Text`
    margin-top: 8px;
    font-size: 13px;
    color: #00fc6c;
`;


