import { useState, useEffect } from 'react';
import { Div } from './style';
import { FiUser } from 'react-icons/fi';

export function UserInfoData(props: any) {
    const [email, setEmail] = useState('');
    const authorization = localStorage.getItem('token');

    useEffect(() => {
        if (!authorization) {
            setEmail('Faça login');
        } else {
            setEmail(`ola ${email}`)
        }
    }, [authorization]);

    return (
        <Div>
            <div className='box-user'>
                <span>{props.email}</span>
            </div>
            <div className='data-user'>
                <div className="avatar-user">
                    <FiUser size={25} />
                </div>
            </div>
        </Div>
    );
}
