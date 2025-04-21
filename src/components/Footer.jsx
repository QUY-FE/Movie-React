function Footer() {
  const time = new Date();
  const year = time.getFullYear();

  return (
    <div className="w-full h-[100px] text-white bg-red-700 mt-4">
      <div className="w-full h-[70px]">
        <ul>
          <li>
            <a href="http://">Gmail: quysamp205@gmail.com</a>
          </li>
          <li>
            <a href="http://">Phone num: 0869498816</a>
          </li>
          <li>
            <a href="http://">Facebook: Quý Nguyễn</a>
          </li>
        </ul>
      </div>
      <p className="w-full h-[30px] text-center">
        &copy;{year} - Bản quyền thuộc về Quý nguyễn(quy-fe)
      </p>
    </div>
  );
}

export default Footer;
