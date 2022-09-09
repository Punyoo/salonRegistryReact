import axios from "axios";
import React, { useState, useEffect, useRef } from "react";

import Modal from "../../Organisms/Modal/Modal";
import Pagination from "../Pagination/Pagination";

// This is all a bit over-kill o-o

import {
  StyledUl,
  StyledLi,
  StyledButton,
  Hourglass,
  StyledNav,
  StyledUlPagination,
  StyledLiPagination,
} from "./UserLiItems.style";

const baseURL = "http://localhost:5000";

const UserLiItems = () => {
  const [users, setUsers] = useState(null);
  const [isOpened, setIsOpened] = useState(false);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUserPerPage] = useState(10);
  const [currentUsers, setCurrentUsers] = useState(null);
  const [pageNumbers] = useState([]);
  async function deleteAppointment(id) {
    try {
      await axios.delete(`${baseURL}/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  }

  async function getUsers() {
    try {
      const users = await axios.get(`${baseURL}/users`);
      setUsers(users.data);
      setLoading(false);

      const indexOfLastUser = currentPage * usersPerPage;
      const indexOfFirstUser = indexOfLastUser - usersPerPage;
      setCurrentUsers(users.data.slice(indexOfFirstUser, indexOfLastUser));

      for (let i = 1; i <= Math.ceil(users.data.length / usersPerPage); i++) {
        if (!pageNumbers.includes(i)) {
          console.log(i);
          pageNumbers.push(i);
          console.log(pageNumbers);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, [currentPage]);

  if (!users || loading) return <Hourglass></Hourglass>;

  return (
    <>
      {currentUsers.map((user) => {
        return (
          <StyledUl key={user._id} id={user._id}>
            <StyledLi>{user.name}</StyledLi>
            <StyledLi>{user.email}</StyledLi>
            <StyledLi>{user.date}</StyledLi>
            <StyledButton
              onClick={() => {
                deleteAppointment(user._id);
                setIsOpened(true);
              }}
            >
              Delete
            </StyledButton>
          </StyledUl>
        );
      })}

      <StyledNav>
        <StyledUlPagination>
          {pageNumbers.map((page) => {
            return (
              <StyledLiPagination
                key={page}
                onClick={() => {
                  // getUsers();
                  setCurrentPage(page);
                }}
              >
                {page}
              </StyledLiPagination>
            );
          })}
        </StyledUlPagination>
      </StyledNav>

      {isOpened && (
        <Modal onClose={() => setIsOpened(false)}>Appointment deleted</Modal>
      )}
    </>
  );
};

export default UserLiItems;
