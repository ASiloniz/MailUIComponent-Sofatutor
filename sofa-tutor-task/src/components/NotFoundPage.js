import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        404 - <Link to="/blogs">Go to Blogs!</Link>
    </div>
);

export default NotFoundPage;