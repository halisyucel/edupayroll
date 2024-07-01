package com.incubator.edupayroll.repository;

import com.incubator.edupayroll.entity.user.UserEntity;
import java.util.Optional;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, UUID> {
  public boolean existsByEmail(String email);

  public Optional<UserEntity> findByEmail(String email);
}
